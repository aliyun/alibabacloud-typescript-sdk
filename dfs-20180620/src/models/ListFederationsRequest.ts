// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFederationsRequest extends $dara.Model {
  federationId?: string;
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputRegionId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      federationId: 'FederationId',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federationId: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
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

