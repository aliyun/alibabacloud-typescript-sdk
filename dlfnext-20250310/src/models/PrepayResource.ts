// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepayResource extends $dara.Model {
  catalogId?: string;
  catalogName?: string;
  cu?: number;
  expireTime?: number;
  gmtCreate?: number;
  instanceId?: string;
  instanceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      catalogName: 'catalogName',
      cu: 'cu',
      expireTime: 'expireTime',
      gmtCreate: 'gmtCreate',
      instanceId: 'instanceId',
      instanceStatus: 'instanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      catalogName: 'string',
      cu: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

