// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimedResidentResourcePoolApplication } from "./TimedResidentResourcePoolApplication";


export class ListTimedResidentResourcePoolApplicationsOutput extends $dara.Model {
  applications?: TimedResidentResourcePoolApplication[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': TimedResidentResourcePoolApplication },
      nextToken: 'string',
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

