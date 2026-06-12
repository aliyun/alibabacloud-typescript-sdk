// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistogramsRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The search statement. Only search statements are supported. Analytic statements are not supported. For more information about the syntax of search statements, see [Search syntax](https://help.aliyun.com/document_detail/43772.html).
   * 
   * @example
   * with_pack_meta
   */
  query?: string;
  /**
   * @remarks
   * The end of the time range for the subinterval. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  /**
   * @remarks
   * The topic of the log.
   * 
   * @example
   * topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      query: 'query',
      to: 'to',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      query: 'string',
      to: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

