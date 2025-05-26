// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsProgressResponseBodyApsHiveProgress extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The migration progress.
   * 
   * @example
   * 95
   */
  progress?: string;
  /**
   * @remarks
   * The migration speed.
   * 
   * @example
   * 2
   */
  speed?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tbName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      progress: 'Progress',
      speed: 'Speed',
      tbName: 'TbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      progress: 'string',
      speed: 'string',
      tbName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

