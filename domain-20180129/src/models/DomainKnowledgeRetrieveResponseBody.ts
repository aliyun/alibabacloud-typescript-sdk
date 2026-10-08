// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DomainKnowledgeRetrieveResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Le score du texte récupéré ; plus le score est élevé, plus le résultat est pertinent.
   * 
   * @example
   * 0.6
   */
  score?: number;
  /**
   * @remarks
   * La source des résultats récupérés.
   * 
   * @example
   * Base de connaissances de l\\"activité nationale
   */
  source?: string;
  /**
   * @remarks
   * Le texte récupéré.
   * 
   * @example
   * Sur le site national d\\"Alibaba Cloud, le renouvellement de nom de domaine peut être effectué via les méthodes suivantes
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      source: 'Source',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      source: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainKnowledgeRetrieveResponseBody extends $dara.Model {
  /**
   * @remarks
   * La liste des résultats récupérés.
   */
  data?: DomainKnowledgeRetrieveResponseBodyData[];
  /**
   * @remarks
   * L\\"identifiant de la requête.
   * 
   * @example
   * 019FABCB-6C7D-18FE-AA42-922BFC9555D9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DomainKnowledgeRetrieveResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

