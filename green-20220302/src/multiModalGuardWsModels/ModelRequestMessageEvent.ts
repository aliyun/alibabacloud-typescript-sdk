// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRequestMessageEvent extends $dara.Model {
  service?: string;
  serviceParameters?: string;
  dataType?: string;
  sync?: boolean;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
      dataType: 'DataType',
      sync: 'Sync',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
      dataType: 'string',
      sync: 'boolean',
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

