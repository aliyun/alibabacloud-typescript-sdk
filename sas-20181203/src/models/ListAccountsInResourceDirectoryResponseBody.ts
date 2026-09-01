// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsInResourceDirectoryResponseBodyAccounts extends $dara.Model {
  /**
   * @remarks
   * L\\"identifiant de compte Alibaba Cloud du membre.
   * 
   * @example
   * 180803538814****
   */
  accountId?: string;
  /**
   * @remarks
   * Ce paramètre est obsolète et ne doit plus être utilisé.
   * 
   * @example
   * true.
   * 
   * @deprecated
   */
  buySas?: number;
  /**
   * @remarks
   * Indique si une instance Security Center en abonnement a été souscrite. Valeurs valides :
   * - **true**
   * - **false**.
   * 
   * @example
   * true.
   */
  buySasNew?: boolean;
  /**
   * @remarks
   * Le mode de facturation de l\\"abonnement. Valeurs valides :
   * * **0** : prépayé
   * * **1** : paiement à l\\"usage.
   * 
   * @example
   * 1
   */
  chargeType?: number;
  /**
   * @remarks
   * Le nom du compte.
   * 
   * @example
   * abc**
   */
  displayName?: string;
  /**
   * @remarks
   * L\\"identifiant du dossier dans le répertoire de ressources.
   * 
   * @example
   * fd-cE2SQP****
   */
  folderId?: string;
  /**
   * @remarks
   * Le type d\\"achat de l\\"instance. Valeurs valides :
   * - **0** : achat direct
   * - **1** : alloué via la gestion multi-comptes.
   * 
   * @example
   * 0
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * Indique si le compte est le compte de gestion du répertoire de ressources. Valeurs valides :
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isMaAccount?: string;
  /**
   * @remarks
   * Indique si le compte est marqué comme suivi.
   * 
   * @example
   * no
   */
  isMarked?: string;
  /**
   * @remarks
   * Indique si le compte est un compte administrateur délégué de Security Center. Valeurs valides :
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isSasDaAccount?: string;
  /**
   * @remarks
   * Indique si le compte est un compte de gestion de Cloud Threat Detection and Response (CTDR). Valeurs valides :
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isSiemControlAccount?: string;
  /**
   * @remarks
   * Indique si le compte est un compte administrateur délégué de Cloud Threat Detection and Response (CTDR). Valeurs valides :
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isSiemDaAccount?: string;
  /**
   * @remarks
   * Le commutateur de module à paiement à l\\"usage. Valeurs valides :
   * - **0** : désactivé
   * - **1** : activé.
   * 
   * @example
   * 1
   */
  postBasicService?: number;
  /**
   * @remarks
   * L\\"état des commutateurs de modules à paiement à l\\"usage, au format JsonString. Valeurs valides :
   * - Clé :
   *   - **VUL** : module de gestion des vulnérabilités
   *   - **CSPM** : module Cloud Security Posture Management (CSPM)
   *   - **AGENTLESS** : module de détection sans agent
   *   - **SERVERLESS** : module de ressources serverless
   *   - **CTDR** : module Cloud Threat Detection and Response (CTDR)
   *   - **RASP** : module Runtime Application Self-Protection (RASP)
   *   - **SDK** : module SDK de détection de fichiers malveillants
   *   - **POST_HOST** : module de sécurité des hôtes et des conteneurs
   * - Valeur : 0 indique désactivé. 1 indique activé.
   * 
   * @example
   * {\\"VUL\\":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * L\\"identifiant de l\\"instance Security Center.
   * 
   * @example
   * postpay-sas-x5x3hy1ly***
   */
  saleInstance?: string;
  /**
   * @remarks
   * L\\"édition souscrite de Security Center. Valeurs valides :
   * 
   * - **0** ou **1** : Édition gratuite
   * - **2** ou **3** : Édition Enterprise  
   * - **5** : Édition Premium  
   * - **6** : Édition Anti-virus 
   * - **7** : Édition Ultimate.
   * 
   * @example
   * 0
   */
  sasVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      buySas: 'BuySas',
      buySasNew: 'BuySasNew',
      chargeType: 'ChargeType',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      instanceBuyType: 'InstanceBuyType',
      isMaAccount: 'IsMaAccount',
      isMarked: 'IsMarked',
      isSasDaAccount: 'IsSasDaAccount',
      isSiemControlAccount: 'IsSiemControlAccount',
      isSiemDaAccount: 'IsSiemDaAccount',
      postBasicService: 'PostBasicService',
      postPayModuleSwitch: 'PostPayModuleSwitch',
      saleInstance: 'SaleInstance',
      sasVersion: 'SasVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      buySas: 'number',
      buySasNew: 'boolean',
      chargeType: 'number',
      displayName: 'string',
      folderId: 'string',
      instanceBuyType: 'number',
      isMaAccount: 'string',
      isMarked: 'string',
      isSasDaAccount: 'string',
      isSiemControlAccount: 'string',
      isSiemDaAccount: 'string',
      postBasicService: 'number',
      postPayModuleSwitch: 'string',
      saleInstance: 'string',
      sasVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsInResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * La liste des comptes membres dans le répertoire de ressources.
   */
  accounts?: ListAccountsInResourceDirectoryResponseBodyAccounts[];
  /**
   * @remarks
   * L\\"identifiant de la requête. Il s\\"agit d\\"un identifiant unique généré par Alibaba Cloud pour la requête. Vous pouvez l\\"utiliser pour le dépannage.
   * 
   * @example
   * B7A839E8-70AE-591D-8D9E-C5419A2240DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': ListAccountsInResourceDirectoryResponseBodyAccounts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

