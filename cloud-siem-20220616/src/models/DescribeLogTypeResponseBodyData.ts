// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogTypeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The internal code of the log type.
   * 
   * @example
   * sas.cloudsiem.prod.http_activity
   */
  logTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      logTypeName: 'LogTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      logTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

