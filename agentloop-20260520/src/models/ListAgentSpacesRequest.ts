// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpacesRequest extends $dara.Model {
  agentSpace?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
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

