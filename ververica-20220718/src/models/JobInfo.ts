// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobInfo extends $dara.Model {
  /**
   * @example
   * 664cc64d-5dea-4ad3-9ee4-8432a874****
   */
  id?: string;
  /**
   * @example
   * {"id:xxx","createTime:v"}
   */
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

