// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSurveyJobRequest extends $dara.Model {
  ak?: string;
  autoConfirm?: boolean;
  channel?: string;
  cloudType?: string;
  name?: string;
  ossObjectName?: string;
  projectId?: string;
  region?: string[];
  resourceTypeList?: string[];
  sk?: string;
  tenantId?: string;
  zone?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      autoConfirm: 'autoConfirm',
      channel: 'channel',
      cloudType: 'cloudType',
      name: 'name',
      ossObjectName: 'ossObjectName',
      projectId: 'projectId',
      region: 'region',
      resourceTypeList: 'resourceTypeList',
      sk: 'sk',
      tenantId: 'tenantId',
      zone: 'zone',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      autoConfirm: 'boolean',
      channel: 'string',
      cloudType: 'string',
      name: 'string',
      ossObjectName: 'string',
      projectId: 'string',
      region: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      sk: 'string',
      tenantId: 'string',
      zone: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    if(Array.isArray(this.resourceTypeList)) {
      $dara.Model.validateArray(this.resourceTypeList);
    }
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

