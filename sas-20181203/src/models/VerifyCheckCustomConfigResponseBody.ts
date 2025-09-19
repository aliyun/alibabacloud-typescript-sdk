// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckCustomConfigResponseBodyErrorCheckConfigsLinkErrorConfigs extends $dara.Model {
  /**
   * @remarks
   * Name of the check item configuration, unique within the same check item.
   * 
   * @example
   * IpLists
   */
  name?: string;
  /**
   * @remarks
   * Display name of the user\\"s check configuration.
   * 
   * @example
   * IP Lists
   */
  showName?: string;
  /**
   * @remarks
   * The type of the parameter that caused the error:
   * - repair: Repair parameter
   * - custom: Custom configuration parameter
   * 
   * @example
   * repair
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      showName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckCustomConfigResponseBodyErrorCheckConfigs extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * ConfigEqualIllegal
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Custom parameter is not equal to corresponding check parameter
   */
  errorMsg?: string;
  /**
   * @remarks
   * Related configurations causing this error.
   */
  linkErrorConfigs?: VerifyCheckCustomConfigResponseBodyErrorCheckConfigsLinkErrorConfigs[];
  /**
   * @remarks
   * Name of the custom configuration item for the check item, unique within the same check item.
   * 
   * @example
   * IpList
   */
  name?: string;
  /**
   * @remarks
   * Type of the erroneous parameter:
   * - custom: Custom configuration parameter
   * 
   * @example
   * custom
   */
  type?: string;
  /**
   * @remarks
   * User-configured value string for the custom configuration item of the check item.
   * 
   * @example
   * 10.12.4.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      linkErrorConfigs: 'LinkErrorConfigs',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      linkErrorConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigResponseBodyErrorCheckConfigsLinkErrorConfigs },
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.linkErrorConfigs)) {
      $dara.Model.validateArray(this.linkErrorConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckCustomConfigResponseBodyErrorCheckCustomConfig extends $dara.Model {
  /**
   * @remarks
   * Error code when failed. This parameter is not returned upon success. 
   * - **CspmVerifyCheckCustomItemNoPass**: The asset did not pass the set custom rules. 
   * - **CspmVerifyCheckCustomItemError**: Verification error, there is an issue with the input rule.
   * 
   * @example
   * CspmVerifyCheckCustomItemNoPass
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * Creation verification failed.
   */
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckCustomConfigResponseBodyErrorRepairConfigsLinkErrorConfigs extends $dara.Model {
  /**
   * @remarks
   * Name of the check item\\"s configuration, unique within the same check item.
   * 
   * @example
   * IpList
   */
  name?: string;
  /**
   * @remarks
   * Display name of the user\\"s check configuration.
   * 
   * @example
   * Ip List
   */
  showName?: string;
  /**
   * @remarks
   * The type of the parameter that caused the error:
   * - repair: Repair parameter
   * - custom: Custom configuration parameter
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      showName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckCustomConfigResponseBodyErrorRepairConfigs extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * ConfigEqualIllegal
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Repair parameter is not equal to corresponding check parameter
   */
  errorMsg?: string;
  /**
   * @remarks
   * Related configurations causing this error.
   */
  linkErrorConfigs?: VerifyCheckCustomConfigResponseBodyErrorRepairConfigsLinkErrorConfigs[];
  /**
   * @remarks
   * Name of the check item\\"s repair configuration, unique within the same check item.
   * 
   * @example
   * IpLists
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter that caused the error:
   * - repair: Repair parameter
   * 
   * @example
   * repair
   */
  type?: string;
  /**
   * @remarks
   * Name of the check item\\"s repair parameter, unique within the same check item.
   * 
   * @example
   * 172.26.49.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      linkErrorConfigs: 'LinkErrorConfigs',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      linkErrorConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigResponseBodyErrorRepairConfigsLinkErrorConfigs },
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.linkErrorConfigs)) {
      $dara.Model.validateArray(this.linkErrorConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCheckCustomConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of check parameters with configuration errors.
   */
  errorCheckConfigs?: VerifyCheckCustomConfigResponseBodyErrorCheckConfigs[];
  /**
   * @remarks
   * Check the error code returned by the custom check item.
   */
  errorCheckCustomConfig?: VerifyCheckCustomConfigResponseBodyErrorCheckCustomConfig;
  /**
   * @remarks
   * List of repair parameters with configuration check errors.
   */
  errorRepairConfigs?: VerifyCheckCustomConfigResponseBodyErrorRepairConfigs[];
  /**
   * @remarks
   * The ID of this call request, a unique identifier generated by Alibaba Cloud for the request, which can be used for troubleshooting and problem localization.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCheckConfigs: 'ErrorCheckConfigs',
      errorCheckCustomConfig: 'ErrorCheckCustomConfig',
      errorRepairConfigs: 'ErrorRepairConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCheckConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigResponseBodyErrorCheckConfigs },
      errorCheckCustomConfig: VerifyCheckCustomConfigResponseBodyErrorCheckCustomConfig,
      errorRepairConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigResponseBodyErrorRepairConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorCheckConfigs)) {
      $dara.Model.validateArray(this.errorCheckConfigs);
    }
    if(this.errorCheckCustomConfig && typeof (this.errorCheckCustomConfig as any).validate === 'function') {
      (this.errorCheckCustomConfig as any).validate();
    }
    if(Array.isArray(this.errorRepairConfigs)) {
      $dara.Model.validateArray(this.errorRepairConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

