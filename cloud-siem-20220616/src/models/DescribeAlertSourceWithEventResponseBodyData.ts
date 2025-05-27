// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertSourceWithEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The internal code of the alert data source.
   * 
   * @example
   * aliyun.siem.alert_datasource.sas
   */
  source?: string;
  /**
   * @remarks
   * The name of the alert data source.
   * 
   * @example
   * sas
   */
  sourceName?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      sourceName: 'SourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

