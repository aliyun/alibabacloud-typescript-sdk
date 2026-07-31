// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the event query.
   * 
   * @example
   * 1746516590000
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the event query.
   * 
   * @example
   * 1746775790000
   */
  endTime?: string;
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The filter object content. If this parameter is left empty, event records of all instances are returned. The value varies based on the filter type.
   * 
   * @example
   * **
   */
  termContent?: string;
  /**
   * @remarks
   * The filter object type. If this parameter is left empty, event records of all types are returned.
   * 
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

