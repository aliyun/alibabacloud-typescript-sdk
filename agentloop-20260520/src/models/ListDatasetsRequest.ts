// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * product_faq_dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. You do not need to set this parameter for the first request. For subsequent requests, set this parameter to the nextToken value returned in the previous response.
   * 
   * @example
   * RsfoUqpOJd5nd0F1e4OquY/7dKNGp1JMgsKtvCagmtY=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'datasetName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
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

