// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTaskReportsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
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

