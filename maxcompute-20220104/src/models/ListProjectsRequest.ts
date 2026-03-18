// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequest extends $dara.Model {
  listSystemCatalog?: boolean;
  marker?: string;
  maxItem?: number;
  prefix?: string;
  quotaName?: string;
  quotaNickName?: string;
  region?: string;
  saleTags?: string;
  tenantId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      listSystemCatalog: 'listSystemCatalog',
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      quotaName: 'quotaName',
      quotaNickName: 'quotaNickName',
      region: 'region',
      saleTags: 'saleTags',
      tenantId: 'tenantId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listSystemCatalog: 'boolean',
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      quotaName: 'string',
      quotaNickName: 'string',
      region: 'string',
      saleTags: 'string',
      tenantId: 'string',
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

