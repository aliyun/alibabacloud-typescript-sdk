// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem extends $dara.Model {
  /**
   * @example
   * 2
   */
  CPU?: string;
  /**
   * @example
   * mssql.x4.medium.s2
   */
  DBInstanceClass?: string;
  DBInstanceClassType?: string;
  /**
   * @example
   * 2
   */
  group?: string;
  /**
   * @example
   * 8GB
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceClassType: 'DBInstanceClassType',
      group: 'Group',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      DBInstanceClass: 'string',
      DBInstanceClassType: 'string',
      group: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems extends $dara.Model {
  DBInstanceClassItem?: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceClassItem: 'DBInstanceClassItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClassItem: { 'type': 'array', 'itemType': DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceClassItem)) {
      $dara.Model.validateArray(this.DBInstanceClassItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion extends $dara.Model {
  DBInstanceClassItems?: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems;
  /**
   * @example
   * NO/YES
   */
  enableUpgrade?: string;
  /**
   * @example
   * 2016_std
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClassItems: 'DBInstanceClassItems',
      enableUpgrade: 'EnableUpgrade',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClassItems: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems,
      enableUpgrade: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.DBInstanceClassItems && typeof (this.DBInstanceClassItems as any).validate === 'function') {
      (this.DBInstanceClassItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions extends $dara.Model {
  SQLServerUpgradeVersion?: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion[];
  static names(): { [key: string]: string } {
    return {
      SQLServerUpgradeVersion: 'SQLServerUpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLServerUpgradeVersion: { 'type': 'array', 'itemType': DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion },
    };
  }

  validate() {
    if(Array.isArray(this.SQLServerUpgradeVersion)) {
      $dara.Model.validateArray(this.SQLServerUpgradeVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLServerUpgradeVersionsResponseBodyItemsItem extends $dara.Model {
  /**
   * @example
   * 2016_web
   */
  currentVersion?: string;
  SQLServerUpgradeVersions?: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      SQLServerUpgradeVersions: 'SQLServerUpgradeVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      SQLServerUpgradeVersions: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions,
    };
  }

  validate() {
    if(this.SQLServerUpgradeVersions && typeof (this.SQLServerUpgradeVersions as any).validate === 'function') {
      (this.SQLServerUpgradeVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLServerUpgradeVersionsResponseBodyItems extends $dara.Model {
  item?: DescribeSQLServerUpgradeVersionsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeSQLServerUpgradeVersionsResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLServerUpgradeVersionsResponseBody extends $dara.Model {
  items?: DescribeSQLServerUpgradeVersionsResponseBodyItems;
  /**
   * @example
   * 866F5EB8-4650-4061-87F0-379F6F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSQLServerUpgradeVersionsResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

