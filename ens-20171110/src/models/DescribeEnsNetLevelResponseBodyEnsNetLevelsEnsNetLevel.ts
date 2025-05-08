// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel extends $dara.Model {
  /**
   * @remarks
   * The network level. Valid values:
   * 
   * *   Big: greater area.
   * *   Middle: province.
   * *   Small: city.
   * 
   * @example
   * Big
   */
  ensNetLevelCode?: string;
  static names(): { [key: string]: string } {
    return {
      ensNetLevelCode: 'EnsNetLevelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevelCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

