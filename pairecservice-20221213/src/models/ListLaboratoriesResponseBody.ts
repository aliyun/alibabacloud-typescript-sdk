// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLaboratoriesResponseBodyLaboratories } from "./ListLaboratoriesResponseBodyLaboratories";


export class ListLaboratoriesResponseBody extends $dara.Model {
  laboratories?: ListLaboratoriesResponseBodyLaboratories[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1C0898E5-9220-5443-B2D9-445FF0688215
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      laboratories: 'Laboratories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laboratories: { 'type': 'array', 'itemType': ListLaboratoriesResponseBodyLaboratories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.laboratories)) {
      $dara.Model.validateArray(this.laboratories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

