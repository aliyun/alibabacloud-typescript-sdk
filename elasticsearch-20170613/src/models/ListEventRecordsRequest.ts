// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time for the event query. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1746516590000
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time for the event query. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1746775790000
   */
  endTime?: string;
  /**
   * @remarks
   * The page number in the paging Settings.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page in the paging Settings.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The content of the object to filter. If this parameter is empty, event records for all instances are returned. Note: Specify the corresponding value based on the filter type.
   * 
   * @example
   * **
   */
  termContent?: string;
  /**
   * @remarks
   * The object type to filter. If this parameter is empty, event records of all types are returned.
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

