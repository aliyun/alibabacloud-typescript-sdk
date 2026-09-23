// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualMFADevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The token for querying the next page of results. You do not need to specify `Marker` for the first API call.
   * 
   * When you call the API for the first time, if the total number of entries exceeds the `MaxItems` limit, the data is truncated and only `MaxItems` entries are returned. In this case, the `IsTruncated` response parameter is `true` and a `Marker` is returned. You can use the `Marker` returned from the previous call to continue calling the API with the same request parameters to query the truncated data. You can repeat this process until `IsTruncated` is `false`, which indicates that all data has been retrieved.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

