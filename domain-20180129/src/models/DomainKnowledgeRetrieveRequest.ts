// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DomainKnowledgeRetrieveRequest extends $dara.Model {
  /**
   * @remarks
   * Le nombre de résultats à renvoyer.
   * 
   * @example
   * 5
   */
  globalTopN?: number;
  /**
   * @remarks
   * Les mots-clés à récupérer.
   * 
   * This parameter is required.
   * 
   * @example
   * comment renouveler
   */
  keyword?: string;
  /**
   * @remarks
   * Les sites de la base de connaissances à interroger, y compris cn pour le national, intl pour l\\"international et all pour tous.
   * 
   * @example
   * all
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      globalTopN: 'GlobalTopN',
      keyword: 'Keyword',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalTopN: 'number',
      keyword: 'string',
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

