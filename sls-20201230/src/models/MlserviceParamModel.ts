// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLServiceParamModel extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  modelResourceId?: string;
  /**
   * @example
   * xxx_type
   */
  modelResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      modelResourceId: 'modelResourceId',
      modelResourceType: 'modelResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResourceId: 'string',
      modelResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

