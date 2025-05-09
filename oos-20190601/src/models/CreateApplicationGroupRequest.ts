// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 218026174
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The ID of the region in which the related sources reside.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  /**
   * @remarks
   * The key of the tag. You must set both the ImportTagKey and the ImportTagValue parameters, or leave both of them empty. If you do not set the ImportTagKey and ImportTagValue parameters, the application name is used for this parameter by default.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The value of the tag. You must set both the ImportTagKey and the ImportTagValue parameters, or leave both of them empty. If you do not set the ImportTagKey and ImportTagValue parameters, the application group name is used for this parameter by default.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clientToken: 'ClientToken',
      cmsGroupId: 'CmsGroupId',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clientToken: 'string',
      cmsGroupId: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

