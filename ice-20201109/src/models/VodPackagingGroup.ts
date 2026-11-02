// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VodPackagingGroup extends $dara.Model {
  /**
   * @remarks
   * The approximate number of packaging assets in the packaging group.
   */
  approximateAssetCount?: number;
  /**
   * @remarks
   * The number of packaging configurations in the packaging group.
   */
  configurationCount?: number;
  /**
   * @remarks
   * The creation time of the packaging group.
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the packaging group.
   */
  description?: string;
  /**
   * @remarks
   * The playback domain name of the packaging group. All VOD packaging assets in the same packaging group share the same domain name.
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the packaging group. The name must be unique per user, up to 128 characters in length, and match the format [A-Za-z0-9_-]+.
   * 
   * @example
   * example-group
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      approximateAssetCount: 'ApproximateAssetCount',
      configurationCount: 'ConfigurationCount',
      createTime: 'CreateTime',
      description: 'Description',
      domainName: 'DomainName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approximateAssetCount: 'number',
      configurationCount: 'number',
      createTime: 'string',
      description: 'string',
      domainName: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

