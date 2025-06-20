// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticResultsRequest extends $dara.Model {
  /**
   * @example
   * NetDiag
   */
  diagType?: string;
  /**
   * @remarks
   * *
   * *
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @example
   * rg-acfmywpvugkh7kq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      diagType: 'DiagType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

