// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VodPackagingGroup extends $dara.Model {
  approximateAssetCount?: number;
  configurationCount?: number;
  createTime?: string;
  description?: string;
  domainName?: string;
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

