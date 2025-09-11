// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { S3Ingestion } from "./S3ingestion";


export class ListS3IngestionsResponseBody extends $dara.Model {
  count?: number;
  results?: S3Ingestion[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': S3Ingestion },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

