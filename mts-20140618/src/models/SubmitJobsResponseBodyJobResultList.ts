// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResult } from "./SubmitJobsResponseBodyJobResultListJobResult";


export class SubmitJobsResponseBodyJobResultList extends $dara.Model {
  jobResult?: SubmitJobsResponseBodyJobResultListJobResult[];
  static names(): { [key: string]: string } {
    return {
      jobResult: 'JobResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResult: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResult },
    };
  }

  validate() {
    if(Array.isArray(this.jobResult)) {
      $dara.Model.validateArray(this.jobResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

