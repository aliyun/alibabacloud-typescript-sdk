// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistogramsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the subinterval. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The query statement. Only query statements are supported. Analytic statements are not supported. For more information about the query syntax, see [Query syntax](https://help.aliyun.com/document_detail/43772.html).
   * 
   * @example
   * with_pack_meta
   */
  query?: string;
  /**
   * @remarks
   * The end time of the subinterval. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  /**
   * @remarks
   * The topic of the logs.
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

