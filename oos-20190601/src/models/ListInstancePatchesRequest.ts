// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancePatchesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1jaxa2bs4bps7*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the patches that you want to query. If you do not set this parameter, patches are not filtered.
   * 
   * @example
   * Installed
   */
  patchStatuses?: string;
  /**
   * @remarks
   * The ID of the region in which the instance whose patches you want to query resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchStatuses: 'PatchStatuses',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      patchStatuses: 'string',
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

