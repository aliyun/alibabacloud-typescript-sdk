// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDifyInstancesRequest extends $dara.Model {
  clientToken?: string;
  dataRegion?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataRegion: 'DataRegion',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataRegion: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

