// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebApplicationWithInstanceCount } from "./WebApplicationWithInstanceCount";


export class ListWebApplicationsOutput extends $dara.Model {
  nextToken?: string;
  webApplicationWithInstanceCount?: WebApplicationWithInstanceCount[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      webApplicationWithInstanceCount: 'WebApplicationWithInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      webApplicationWithInstanceCount: { 'type': 'array', 'itemType': WebApplicationWithInstanceCount },
    };
  }

  validate() {
    if(Array.isArray(this.webApplicationWithInstanceCount)) {
      $dara.Model.validateArray(this.webApplicationWithInstanceCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

