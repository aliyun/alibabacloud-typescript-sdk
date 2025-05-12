// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList extends $dara.Model {
  amix?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix[];
  static names(): { [key: string]: string } {
    return {
      amix: 'Amix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amix: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix },
    };
  }

  validate() {
    if(Array.isArray(this.amix)) {
      $dara.Model.validateArray(this.amix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

