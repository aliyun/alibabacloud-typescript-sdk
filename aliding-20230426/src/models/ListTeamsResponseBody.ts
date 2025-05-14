// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTeamsResponseBodyTeams } from "./ListTeamsResponseBodyTeams";


export class ListTeamsResponseBody extends $dara.Model {
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  teams?: ListTeamsResponseBodyTeams[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      teams: 'teams',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      teams: { 'type': 'array', 'itemType': ListTeamsResponseBodyTeams },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.teams)) {
      $dara.Model.validateArray(this.teams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

