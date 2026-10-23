// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceLastAccessedDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ba536aab-84c6-43af-8bcb-aa2cae2a34eb
   */
  jobId?: string;
  /**
   * @example
   * CgxMaXN0UmFtVXNlcnMSEDExNzkxNDgwMzgyMTQyNTUaATIgZA==
   */
  marker?: string;
  /**
   * @example
   * 50
   */
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      marker: 'string',
      maxItems: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

