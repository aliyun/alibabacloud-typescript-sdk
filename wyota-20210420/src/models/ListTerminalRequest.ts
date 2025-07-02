// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerminalRequest extends $dara.Model {
  alias?: string;
  buildId?: string;
  clientType?: number;
  inManage?: boolean;
  ipv4?: string;
  locationInfo?: string;
  maxResults?: number;
  model?: string;
  nextToken?: string;
  searchKeyword?: string;
  serialNumber?: string;
  terminalGroupId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      buildId: 'BuildId',
      clientType: 'ClientType',
      inManage: 'InManage',
      ipv4: 'Ipv4',
      locationInfo: 'LocationInfo',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      searchKeyword: 'SearchKeyword',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      buildId: 'string',
      clientType: 'number',
      inManage: 'boolean',
      ipv4: 'string',
      locationInfo: 'string',
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      searchKeyword: 'string',
      serialNumber: 'string',
      terminalGroupId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

