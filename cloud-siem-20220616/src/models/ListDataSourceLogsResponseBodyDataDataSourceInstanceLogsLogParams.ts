// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams extends $dara.Model {
  /**
   * @remarks
   * The parameter code of the log.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The parameter value of the log.
   * 
   * @example
   * ap-guangzhou
   */
  paraValue?: string;
  static names(): { [key: string]: string } {
    return {
      paraCode: 'ParaCode',
      paraValue: 'ParaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraCode: 'string',
      paraValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

