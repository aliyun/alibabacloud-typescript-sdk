// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The API key of the model service.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The region ID.
   * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

