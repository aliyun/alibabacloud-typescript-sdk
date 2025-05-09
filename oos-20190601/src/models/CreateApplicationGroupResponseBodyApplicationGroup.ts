// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationGroupResponseBodyApplicationGroup extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 1245768
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the region in which the related sources reside.
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
   * The key of the tag.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The time when the application group was updated.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

