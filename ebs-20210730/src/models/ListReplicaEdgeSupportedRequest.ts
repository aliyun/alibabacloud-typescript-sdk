// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReplicaEdgeSupportedRequest extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  azone?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 500. This parameter is not enabled.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. Set this parameter to the value of NextToken that was returned by the last call. Do not set this parameter for the first call. If you set NextToken, PageSize and PageNumber are ignored. TotalCount is also invalid in the response. This parameter is not enabled.
   * 
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

