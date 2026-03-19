// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRecordsRequest extends $dara.Model {
  /**
   * @example
   * 1746516590000
   */
  beginTime?: string;
  /**
   * @example
   * 1746775790000
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * **
   */
  termContent?: string;
  /**
   * @example
   * InstanceId
   */
  termType?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      page: 'page',
      size: 'size',
      termContent: 'termContent',
      termType: 'termType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      page: 'number',
      size: 'number',
      termContent: 'string',
      termType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

