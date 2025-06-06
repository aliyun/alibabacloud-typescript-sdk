// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Application } from "./Application";


export class ListApplicationsOutput extends $dara.Model {
  applications?: Application[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': Application },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

