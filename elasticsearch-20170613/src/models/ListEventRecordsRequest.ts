// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Start time for event query.
   * 
   * @example
   * 1746516590000
   */
  beginTime?: string;
  /**
   * @remarks
   * End time for event query.
   * 
   * @example
   * 1746775790000
   */
  endTime?: string;
  /**
   * @remarks
   * Page number for paged query.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of entries per page for paged query.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Object content used for filtering. This parameter is optional. If empty, event records for all instances are returned. Note: The value passed must correspond to the selected filter type.
   * 
   * @example
   * **
   */
  termContent?: string;
  /**
   * @remarks
   * Object type used for filtering. This parameter is optional. If empty, event records of all types are returned.
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

