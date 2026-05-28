// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AzureBlobIngestion } from "./AzureBlobIngestion";


export class ListAzureBlobIngestionResponseBody extends $dara.Model {
  count?: number;
  results?: AzureBlobIngestion[];
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
      results: { 'type': 'array', 'itemType': AzureBlobIngestion },
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

