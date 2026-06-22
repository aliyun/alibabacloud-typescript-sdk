// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGraph4InvestigationOnlineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event. You can call [DescribeSuspEvents](~~DescribeSuspEvents~~) to obtain the alert event ID. The value is in the data.SuspEvents[index].UniqueInfo path.
   * 
   * @example
   * 786fc80896b25422b5324cb6e57bxxxx
   */
  anomalyId?: string;
  /**
   * @remarks
   * The UUID of the asset associated with the alert event. You can call [DescribeSuspEvents](~~DescribeSuspEvents~~) to obtain the asset UUID. The value is in the data.SuspEvents[index].Uuid path.
   * 
   * @example
   * 3502e4b0-f362-4059-84a2-f47fa2b5exxx
   */
  anomalyUuid?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The namespace of the graph. Set this parameter to hundun_dc_online.
   * 
   * This parameter is required.
   * 
   * @example
   * hundun_dc_online
   */
  namespace?: string;
  /**
   * @remarks
   * The vertex ID. You do not need to specify this parameter.
   * 
   * @example
   * 29872354f741b1b044b8a9b4e2ab****
   */
  vertexId?: string;
  static names(): { [key: string]: string } {
    return {
      anomalyId: 'AnomalyId',
      anomalyUuid: 'AnomalyUuid',
      lang: 'Lang',
      namespace: 'Namespace',
      vertexId: 'VertexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anomalyId: 'string',
      anomalyUuid: 'string',
      lang: 'string',
      namespace: 'string',
      vertexId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

