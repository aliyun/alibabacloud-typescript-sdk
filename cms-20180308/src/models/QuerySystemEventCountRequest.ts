// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySystemEventCountRequest extends $dara.Model {
  queryJson?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      queryJson: 'QueryJson',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryJson: 'string',
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

