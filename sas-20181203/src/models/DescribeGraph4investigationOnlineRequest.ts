// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGraph4InvestigationOnlineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event. You can call [DescribeSuspEvents](~~DescribeSuspEvents~~) to obtain the alert event ID, with the value path being: data.SuspEvents[index].UniqueInfo.
   * 
   * @example
   * 786fc80896b25422b5324cb6e57bxxxx
   */
  anomalyId?: string;
  /**
   * @remarks
   * The UUID of the alert event asset. You can call [DescribeSuspEvents](~~DescribeSuspEvents~~) to obtain the asset UUID, with the value path being: data.SuspEvents[index].Uuid.
   * 
   * @example
   * 3502e4b0-f362-4059-84a2-f47fa2b5exxx
   */
  anomalyUuid?: string;
  /**
   * @remarks
   * Sets the language type for the request and response messages. The default is **zh**. Values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The namespace of the graph, which is fixed as: hundun_dc_online.
   * 
   * This parameter is required.
   * 
   * @example
   * hundun_dc_online
   */
  namespace?: string;
  /**
   * @remarks
   * Vertex ID. This does not need to be proactively provided.
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

