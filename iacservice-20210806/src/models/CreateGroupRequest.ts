// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateGroupRequestNotifyConfig extends $dara.Model {
  /**
   * @example
   * /
   */
  notifyPath?: string;
  /**
   * @example
   * DingDing
   */
  notifyType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyPath: 'notifyPath',
      notifyType: 'notifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPath: 'string',
      notifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequestTriggerConfig extends $dara.Model {
  /**
   * @example
   * Cron
   */
  triggerStrategy?: string;
  /**
   * @example
   * 0 0 19 * * ？
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  notifyConfig?: CreateGroupRequestNotifyConfig[];
  notifyOperationTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * p-433aead7560571a87349d054b4
   */
  projectId?: string;
  /**
   * @example
   * ramName
   */
  ramRole?: string;
  reportExportField?: string[];
  /**
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/test/test
   */
  reportExportPath?: string;
  /**
   * @example
   * 1.189.0
   */
  terraformProviderVersion?: string;
  triggerConfig?: CreateGroupRequestTriggerConfig[];
  triggerResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      autoDestroy: 'autoDestroy',
      autoTrigger: 'autoTrigger',
      clientToken: 'clientToken',
      description: 'description',
      forcedSetting: 'forcedSetting',
      name: 'name',
      notifyConfig: 'notifyConfig',
      notifyOperationTypes: 'notifyOperationTypes',
      projectId: 'projectId',
      ramRole: 'ramRole',
      reportExportField: 'reportExportField',
      reportExportPath: 'reportExportPath',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerConfig: 'triggerConfig',
      triggerResourceType: 'triggerResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDestroy: 'boolean',
      autoTrigger: 'boolean',
      clientToken: 'string',
      description: 'string',
      forcedSetting: 'boolean',
      name: 'string',
      notifyConfig: { 'type': 'array', 'itemType': CreateGroupRequestNotifyConfig },
      notifyOperationTypes: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      ramRole: 'string',
      reportExportField: { 'type': 'array', 'itemType': 'string' },
      reportExportPath: 'string',
      terraformProviderVersion: 'string',
      triggerConfig: { 'type': 'array', 'itemType': CreateGroupRequestTriggerConfig },
      triggerResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyConfig)) {
      $dara.Model.validateArray(this.notifyConfig);
    }
    if(Array.isArray(this.notifyOperationTypes)) {
      $dara.Model.validateArray(this.notifyOperationTypes);
    }
    if(Array.isArray(this.reportExportField)) {
      $dara.Model.validateArray(this.reportExportField);
    }
    if(Array.isArray(this.triggerConfig)) {
      $dara.Model.validateArray(this.triggerConfig);
    }
    if(Array.isArray(this.triggerResourceType)) {
      $dara.Model.validateArray(this.triggerResourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

