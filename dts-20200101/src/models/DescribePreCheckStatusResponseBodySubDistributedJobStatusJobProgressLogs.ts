// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckStatusResponseBodySubDistributedJobStatusJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * The record of errors.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`runoob_id` int(10) unsigned auto_increment COMMENT \\"\\" NOT NULL , \\n`runoob_title` varchar(100) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT \\"\\" NOT NULL , \\n`runoob_author1216` varchar(40) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT \\"\\" NOT NULL , \\n`submission_date1216` date COMMENT \\"\\" NULL \\n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  errData?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * get metric list fail
   */
  errMsg?: string;
  /**
   * @remarks
   * The error type.
   * 
   * @example
   * ForeignKey
   */
  errType?: string;
  /**
   * @remarks
   * The level of logs.
   * 
   * @example
   * INFO
   */
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

