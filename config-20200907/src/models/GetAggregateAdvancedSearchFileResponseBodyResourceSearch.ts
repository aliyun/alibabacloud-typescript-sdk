// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateAdvancedSearchFileResponseBodyResourceSearch extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource file.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the resource file was generated. The value is a timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1691375618130
   */
  resourceInventoryGenerateTime?: number;
  /**
   * @remarks
   * The generation status of the resource file. Valid values:
   * 
   * *   CREATING: The resource file is being generated.
   * *   COMPLETE: The resource file is generated.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

