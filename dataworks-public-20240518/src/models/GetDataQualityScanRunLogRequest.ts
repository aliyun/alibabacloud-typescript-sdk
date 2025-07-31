// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanRunLogRequest extends $dara.Model {
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * 200
   */
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      offset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

