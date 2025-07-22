// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatTableEntriesRequest extends $dara.Model {
  maxResults?: number;
  natGatewayId?: string;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  snatEntryId?: string;
  snatTableId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      snatEntryId: 'SnatEntryId',
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      natGatewayId: 'string',
      nextToken: 'string',
      regionId: 'string',
      snatEntryId: 'string',
      snatTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

