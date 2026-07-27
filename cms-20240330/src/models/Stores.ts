// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Stores extends $dara.Model {
  /**
   * @deprecated
   */
  project?: string;
  /**
   * @deprecated
   */
  regionId?: string;
  store?: string;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      regionId: 'regionId',
      store: 'store',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      regionId: 'string',
      store: 'string',
      storeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

