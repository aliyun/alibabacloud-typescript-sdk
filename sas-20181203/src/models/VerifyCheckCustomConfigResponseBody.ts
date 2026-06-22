// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckCustomConfigResponseBodyErrorCheckConfigsLinkErrorConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the check item configuration. The name is unique within the check item.
   * 
   * @example
   * IpLists
   */
  name?: string;
  /**
   * @remarks
   * The display name of the user check configuration.
   * 
   * @example
   * IP Lists
   */
  showName?: string;
  /**
   * @remarks
   * The type of the parameter that has an error. Valid values:
   * - repair: repair parameter
   * - custom: custom configuration parameter.
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
   * The error code.
   * 
   * @example
   * ConfigEqualIllegal
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Custom parameter is not equal to corresponding check parameter
   */
  errorMsg?: string;
  /**
   * @remarks
   * The related configurations that caused this error.
   */
  linkErrorConfigs?: VerifyCheckCustomConfigResponseBodyErrorCheckConfigsLinkErrorConfigs[];
  /**
   * @remarks
   * The name of the custom configuration item for the check item. The name is unique within the check item.
   * 
   * @example
   * IpList
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter that has an error. Valid values:
   * - custom: custom configuration parameter.
   * 
   * @example
   * custom
   */
  type?: string;
  /**
   * @remarks
   * The user-configured value string of the custom configuration item for the check item.
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
   * The error code returned upon failure. This parameter is not returned upon success. Valid values:
   * - **CspmVerifyCheckCustomItemNoPass**: The asset did not pass the custom rule that was configured.
   * - **CspmVerifyCheckCustomItemError**: A validation error occurred because the input rule has issues.
   * 
   * @example
   * CspmVerifyCheckCustomItemNoPass
   */
  errorCode?: string;
  /**
   * @remarks
   * The exception information.
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
   * The name of the check item configuration. The name is unique within the check item.
   * 
   * @example
   * IpList
   */
  name?: string;
  /**
   * @remarks
   * The display name of the user check configuration.
   * 
   * @example
   * Ip List
   */
  showName?: string;
  /**
   * @remarks
   * The type of the parameter that has an error. Valid values:
   * - repair: repair parameter
   * - custom: custom configuration parameter.
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
   * The error code.
   * 
   * @example
   * ConfigEqualIllegal
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Repair parameter is not equal to corresponding check parameter
   */
  errorMsg?: string;
  /**
   * @remarks
   * The related configurations that caused this error.
   */
  linkErrorConfigs?: VerifyCheckCustomConfigResponseBodyErrorRepairConfigsLinkErrorConfigs[];
  /**
   * @remarks
   * The name of the repair configuration item for the check item. The name is unique within the check item.
   * 
   * @example
   * IpLists
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter that has an error. Valid values:
   * - repair: repair parameter.
   * 
   * @example
   * repair
   */
  type?: string;
  /**
   * @remarks
   * The name of the repair parameter for the check item. The name is unique within the check item.
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
   * The list of check parameters that have configuration check errors.
   */
  errorCheckConfigs?: VerifyCheckCustomConfigResponseBodyErrorCheckConfigs[];
  /**
   * @remarks
   * The error code returned for the custom check item validation.
   */
  errorCheckCustomConfig?: VerifyCheckCustomConfigResponseBodyErrorCheckCustomConfig;
  /**
   * @remarks
   * The list of repair parameters that have configuration check errors.
   */
  errorRepairConfigs?: VerifyCheckCustomConfigResponseBodyErrorRepairConfigs[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

