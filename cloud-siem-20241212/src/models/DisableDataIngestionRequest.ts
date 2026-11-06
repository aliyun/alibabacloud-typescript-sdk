// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableDataIngestionRequest extends $dara.Model {
  dataIngestionId?: string;
  lang?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionId: 'DataIngestionId',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionId: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

