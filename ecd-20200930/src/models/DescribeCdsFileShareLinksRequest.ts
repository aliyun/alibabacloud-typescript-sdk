// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdsFileShareLinksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-532033****
   */
  cdsId?: string;
  /**
   * @remarks
   * The users that create the file sharing links.
   */
  creators?: string[];
  /**
   * @remarks
   * The maximum number of resources to return. Valid values: 1 to 100. Default value: 100. The number of returned resources must be less than or equal to the specified number.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies the marker after which the returned list begins. If this parameter is not specified, all results are returned. Default value: null.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the file sharing link.
   * 
   * @example
   * 7JQX1Fs****
   */
  shareId?: string;
  /**
   * @remarks
   * The sharing name for fuzzy search.
   * 
   * @example
   * user
   */
  shareName?: string;
  /**
   * @remarks
   * The file sharing status. Valid values: ● disabled: canceled ● enabled: valid
   * 
   * @example
   * disabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      creators: 'Creators',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      shareId: 'ShareId',
      shareName: 'ShareName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      creators: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      shareId: 'string',
      shareName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.creators)) {
      $dara.Model.validateArray(this.creators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

